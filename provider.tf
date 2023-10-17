
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

#configure the aws provider
provider "aws" {
  region = var.aws_region
}
