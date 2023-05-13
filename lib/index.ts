import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as kms from 'aws-cdk-lib/aws-kms'

export class MultiRegionS3CrrKmsCmkTarget extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    const targetKmsKey = new kms.Key(this, 'MyTargetKey')
  }
}
