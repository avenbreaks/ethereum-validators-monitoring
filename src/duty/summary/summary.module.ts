import { Module } from '@nestjs/common';

import { ConsensusProviderModule } from 'common/eth-providers';
import { RegistryModule } from 'common/validators-registry';
import { ClickhouseModule } from 'storage/clickhouse';

import { SummaryMetrics } from './summary.metrics';
import { SummaryService } from './summary.service';

@Module({
  imports: [RegistryModule, ConsensusProviderModule, ClickhouseModule],
  providers: [SummaryService, SummaryMetrics],
  exports: [SummaryService, SummaryMetrics],
})
export class SummaryModule {}
