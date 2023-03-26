// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface MultiRegionS3CrrKmsCmkTargetProps {
  // Define construct properties here
}

export class MultiRegionS3CrrKmsCmkTarget extends Construct {

  constructor(scope: Construct, id: string, props: MultiRegionS3CrrKmsCmkTargetProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'MultiRegionS3CrrKmsCmkTargetQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
