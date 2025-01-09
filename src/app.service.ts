import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findPrice({
    symbol,
    companyName,
  }: {
    symbol: string;
    companyName: string;
  }) {
    if (symbol && companyName)
      throw new BadRequestException(
        'Can you use either a symbol or a company name in a single selection?',
      );
    const symbols = await yahooFinance.search(symbol || companyName);
    if (!symbols.count) throw new NotFoundException();
    const searchSymbol = (symbols.quotes[0] as any).symbol;
    return this.getCurrentPrice(searchSymbol);
  }

  async getCurrentPrice(symbol = 'AAPL') {
    const symbolPriceCache = await this.cacheManager.get(
      `price_${symbol.toUpperCase()}`,
    );
    if (symbolPriceCache) return symbolPriceCache;

    const quote = await yahooFinance.quote(symbol);
    const symbolPrice = {
      currentPrice: quote.regularMarketPrice,
      currency: quote.currency,
      displayName: quote.displayName,
      longName: quote.longName,
      shortName: quote.shortName,
      symbol: quote.symbol,
    };
    this.cacheManager.set(`price_${symbol.toUpperCase()}`, symbolPrice, 1000);
    return symbolPrice;
  }
}
