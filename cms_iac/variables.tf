variable "aws_region" {
  description = "AWS region to deploy"
  default     = "us-west-2"
}

variable "cluster_name" {
  default = "cms-eks-cluster-test"
}

variable "frontend_image" {
  default = "471112983152.dkr.ecr.us-west-2.amazonaws.com/frontend:latest"
}

variable "backend_image" {
  default = "471112983152.dkr.ecr.us-west-2.amazonaws.com/backend:latest"
}