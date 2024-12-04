# module "argocd" {
#   source          = "terraform-helm/helm/kubernetes"
#   chart           = "argo-cd"
#   name            = "argocd"
#   namespace       = "argocd"
#   create_namespace = true
#   version         = "5.0.0"
#   values = [
#     {
#       server = {
#         ingress = {
#           enabled = true
#           host = "argocd.<your-domain>"
#         }
#       }
#     }
#   ]
# }