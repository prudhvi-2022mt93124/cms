resource "aws_eks_cluster" "main" {
  name     = "my-eks-cluster"
  role_arn = aws_iam_role.eks_cluster_role.arn

  vpc_config {
    subnet_ids = [
      aws_subnet.private_subnet_1.id,
      aws_subnet.private_subnet_2.id
    ]
  }

depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_role_policy,
    aws_subnet.private_subnet_1,
    aws_subnet.private_subnet_2  
    
  ]
  # EKS settings
}

resource "aws_iam_role" "eks_cluster_role" {
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "eks.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "eks_cluster_role_policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.eks_cluster_role.name
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  enable_dns_support = true
  enable_dns_hostnames = true
  tags = {
    Name = "main-vpc"
  }
}

# Create Private Subnets
resource "aws_subnet" "private_subnet_1" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.3.0/24"
  availability_zone       = "us-west-2a"
  map_public_ip_on_launch = false
  tags = {
    Name = "private-subnet-1"
  }
}

resource "aws_subnet" "private_subnet_2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "us-west-2b"
  map_public_ip_on_launch = false
  tags = {
    Name = "private-subnet-2"
  }
}


# Create an EKS Cluster
# module "eks" {
#   source          = "terraform-aws-modules/eks/aws"
#   cluster_name    = var.cluster_name
#   cluster_version = "1.21"
#   subnets         = data.aws_subnets.selected.ids
#   vpc_id          = data.aws_vpc.selected.id

#   node_groups = {
#     eks_nodes = {
#       desired_capacity = 2
#       max_capacity     = 3
#       min_capacity     = 1
#       instance_type    = "t3.medium"
#     }
#   }
# }

# # Output EKS Cluster Endpoint and Kubeconfig
# output "cluster_endpoint" {
#   value = resource.aws_eks_cluster.main.cluster_endpoint
# }

# output "cluster_kubeconfig" {
#   value = resource.aws_eks_cluster.main.kubeconfig
# }