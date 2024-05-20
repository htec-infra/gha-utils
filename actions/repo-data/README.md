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

The `app_config_file` option is used for monorepos. For example:

    app1/infra/app.conf
    app2/infra/app.conf

Each app has its own container registry, enabling monorepo support.

Example output:

Repository name: reponame
Organization name: orgname
App Version: alpha-53329f6
Revision: Production
Release type: Alpha (Debug)
Container repo: eu.gcr.io/reponame
Branch ref: refs/heads/main
Head Branch ref:
