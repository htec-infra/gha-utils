module.exports = ({github, context, PR_MSG}) => {
    if (context.eventName == "pull_request") {
        const { issue: { number: issue_number }, repo: { owner, repo }  } = context;
        const body = decodeURI("👋 Hey!", PR_MSG);
        github.rest.issues.createComment({ issue_number, owner, repo, body });
    } else {
        console.log("Not a PR")
    }
}