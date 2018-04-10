import { Request } from 'express'
import { baqend, model } from 'baqend'
import { MultiComparisonWorker } from './MultiComparisonWorker'
import { MultiComparisonRequest } from './MultiComparisonRequest'
import { ComparisonWorker } from './ComparisonWorker'
import { TestWorker } from './TestWorker'

export async function startMultiComparison(db: baqend, createdBy: string, tests: model.ComparisonInfo): Promise<model.BulkTest> {
  const testWorker = new TestWorker(db)
  const comparisonWorker = new ComparisonWorker(db, testWorker)
  const multiComparisonWorker = new MultiComparisonWorker(db, comparisonWorker)

  const multiComparisonRequest = new MultiComparisonRequest(db, createdBy, tests)
  const multiComparison = await multiComparisonRequest.create()
  multiComparisonWorker.next(multiComparison)

  return multiComparison
}

export async function call(db: baqend, data: any, req: Request): Promise<model.BulkTest> {
  const { body } = req
  const { createdBy = null, test } = body

  return startMultiComparison(db, createdBy, test)
}
