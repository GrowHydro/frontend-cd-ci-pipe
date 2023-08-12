resource "aws_ecr_repository" "react-front-end" {
  name                 = "${var.company}-${var.env}-docker-react-front-end"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}