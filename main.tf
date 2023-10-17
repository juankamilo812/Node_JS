
resource "aws_s3_bucket" "curso_terraform" {
  bucket = "terraformsophostest3"


  tags = {
    Name        = "terraformsophostest3"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket" "curso_terraform1" {
  bucket = "terraformsophostest4"


  tags = {
    Name        = "terraformsophostest3"
    Environment = "Dev"
  }
}
