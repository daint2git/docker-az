#!/bin/bash
aws --endpoint-url=http://localstack:4566 s3 mb s3://${LOCALSTACK_BUCKET}
aws --endpoint-url=http://localstack:4566 s3api put-bucket-acl --bucket ${LOCALSTACK_BUCKET} --acl public-read
