resource "aws_codebuild_project" "front_end" {
  name         = "react"
  description  = "CICD for react front-end"
  service_role = aws_iam_role.codebuild_role.arn

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:5.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"

    privileged_mode = true
    # registry_credential {
    #   credential          = var.dockerhub_credentials
    #   credential_provider = "SECRETS_MANAGER"
    # }
  }

  logs_config {
    cloudwatch_logs {
      status = "ENABLED"
    }
  }

  source {
    type      = "CODEPIPELINE"
    buildspec = file("./react-buildspec.yml")
  }


}