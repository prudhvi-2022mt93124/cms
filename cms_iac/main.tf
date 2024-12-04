# provider "aws" {
#   region = var.aws_region
# }

# module "eks" {
#   source = "./eks_cluster.tf"
# }

# module "argocd" {
#   source = "./argocd.tf"
# }

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

# module "ecr" {
#   source = "./ecr_repo.tf"
# }
# resource "aws_s3_bucket" "example" {
#   bucket = "my-unique-bucket-cms-123"  # The name must be globally unique
#   acl    = "private"  # Access control list, private by default

#   tags = {
#     Name        = "MyExampleBucket"
#     Environment = "Dev"
#   }
# }

# Optionally, create an S3 bucket versioning configuration
# resource "aws_s3_bucket_versioning" "example" {
#   bucket = aws_s3_bucket.example.id

#   versioning {
#     status = "Enabled"
#   }
# }