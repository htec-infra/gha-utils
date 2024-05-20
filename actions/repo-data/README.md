# Utility

Composite action used for resolving repository and organization name.
This workflow is generating 8 oputputs:
- org_name
- repo_name
- app_version
- app_revision
- app_release_type
- container_repo
- branch_ref
- head_branch_ref

The `container_dir` option is used for monorepos. For example:

    container_dir_1/app.conf
    container_dir_2/app.conf

Each app has its own container registry, enabling monorepo support.

inputs:
  container_dir:
    description: "Container config directory"
    required: false
    default: "infra/"

Example output:

Repository name: reponame
Organization name: orgname
App Version: alpha-53329f6
Revision: Production
Release type: Alpha (Debug)
Container repo: eu.gcr.io/reponame
Branch ref: refs/heads/main
Head Branch ref: 