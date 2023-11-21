###########################################################MODULOS

# module "vpc" {
#   source  = "terraform-aws-modules/vpc/aws"
#   version = "5.1.2"

#   name = "terraform"
#   cidr = "10.0.0.0/16"

#   azs             = ["${var.aws_region}a", "${var.aws_region}b", "${var.aws_region}c"]
#   private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
#   public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

#   enable_ipv6 = true

#   enable_nat_gateway = var.enable_nat_gateway.id
#   enable_vpn_gateway = var.enable_vpn_gateway.identifier

#   public_subnet_tags = {
#     Name = "overridde-name-public"
#   }

#   tags = {
#     Owner       = "user"
#     Environment = "dev"
#   }
#   vpc_tags = {
#     Name = "vpc-name"
#   }
# }

#MODULOS

# module "rds" {
#   source  = "terraform-aws-modules/rds/aws"
#   version = "6.3.0"
# identifier = "demodb"
# }

#######################################################RECURSOS

#VPC

resource "aws_vpc" "terraform" {
  cidr_block = "172.31.0.0/16"
  tags = {
    Name = "vpc-terraform"
  }
}

# data "aws_vpc" "terraform" {
#   default = false
# }

# resource "aws_subnet" "subnet1" {
#   vpc_id     = data.aws_vpc.terraform.id
#   availability_zone = "us-east-1a"
#   cidr_block = cidrsubnet(data.aws_vpc.terraform.cidr_block, 4, 6)

#   tags = {
#     Name = "terraform"
#   }
# }


#ASG

# resource "aws_launch_template" "foobar" {
#   name_prefix   = "foobar"
#   image_id      = var.linux-ami
#   instance_type = var.instancetype
# }

# resource "aws_autoscaling_group" "bar" {
#   availability_zones = ["us-east-1a"]
#   desired_capacity   = 1
#   max_size           = 1
#   min_size           = 1

#   launch_template {
#     id      = aws_launch_template.foobar.id
#     version = "$Latest"
#   }
# }

##RDS

#   resource "aws_db_instance" "default" {
#   allocated_storage    = 10
#   db_name              = "mydb"
#   engine               = "mysql"
#   engine_version       = "5.7"
#   instance_class       = "db.t3.micro"
#   username             = "foo"
#   password             = "foobarbaz"
#   parameter_group_name = "default.mysql5.7"
#   skip_final_snapshot  = true
# }

#EC2

# resource "aws_instance" "terraform-course" {
#   ami           = var.linux-ami
#   instance_type = var.instancetype
#   user_data     = "${file("userdata.sh")}"

#   tags = {
#     Name        = "terraformlinux"
#     Environment = "Dev"
#   }
# }

#condicionales

# resource "aws_instance" "terraform-course" {
#   ami           = var.linux-ami
#   instance_type = var.instancetype
#   availability_zone = "${var.env == "dev" ? data.aws_subnet.terraform5.availability_zone : data.aws_subnet.terraform6.availability_zone }"
#   user_data     = "${file("userdata.sh")}"

#   tags = {
#     Name        = "terraformlinux"
#     Environment = "dev"
#   }
# }


# data "aws_subnet" "terraform5" {
#   id = "subnet-0f849e7c5b0f0c079"
# }

# data "aws_subnet" "terraform6" {
#   id = "subnet-00601a12e81fc499e"
# }

# #ciclos

# resource "aws_instance" "terraform-course" {
#   ami           = var.linux-ami
#   instance_type = var.instancetype
#   availability_zone = "${var.env == "dev" ? data.aws_subnet.terraform5.availability_zone : data.aws_subnet.terraform6.availability_zone }"
#   user_data     = "${file("userdata.sh")}"

#   tags = { for k, v in merge({ name = "Drive"}, var.tags): k => lower(v)}
#   }

#EBS

# resource "aws_ebs_volume" "terraform-course-ebs" {
#   availability_zone = "${var.aws_region}c"
#   size              = 20
#   type              = "gp2"

#   tags = {
#     Name        = "terraformlinux"
#     Environment = "Dev"
#   }
# }

# resource "aws_volume_attachment" "ebs_att" {
#   device_name = "/dev/sdh"
#   volume_id   = aws_ebs_volume.terraform-course-ebs.id
#   instance_id = aws_instance.terraform-course.id
# }


#S3

# resource "aws_s3_bucket" "curso_terraform" {
#   bucket = "terraformteststatetf"


#   tags = {
#     Name        = "terraformteststatetf"
#     Environment = "Dev"
#   }
# }

# resource "aws_s3_bucket" "curso_terraform1" {
#   bucket = "terraformsophostest4"


#   tags = {
#     Name        = "terraformsophostest3"
#     Environment = "Dev"
#   }
# }
