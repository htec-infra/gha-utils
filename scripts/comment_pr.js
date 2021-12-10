module.exports = ({github, context}) => {
    if (context.eventName == "pull_request") {
        const { issue: { number: issue_number }, repo: { owner, repo }  } = context;
        const { REPO_SUMMARY } = process.env
        const body = decodeURI('👋 Hey! ${REPO_SUMMARY}');
        github.rest.issues.createComment({ issue_number, owner, repo, body });
    } else {
        console.log("Not a PR")
    }
}