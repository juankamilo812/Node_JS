terraform {
  backend "s3" {
    bucket = "terraform-state-terraformtest"
    key = "terraform.tfstate"
    region = "us-east-1"
  }
}