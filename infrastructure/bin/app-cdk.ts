#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { AmplifyHostingStack } from "../lib/nextjs-hosting-stack";

const app = new cdk.App()

const amplifyHostingStack = new AmplifyHostingStack(
	app,
	"AppHostingStack",
	{
		// Name given to plaintext secret in secretsManager.
		// When creating the token scope on Github, only the admin:repo_hook scope is needed
		githubOauthTokenName: "nextjs-aws-github-token",
		// swap for your github username
		owner: "DanielJohnsson87",
		// swap for your github frontend repo
		repository: "aws-nextjs",
		//pass in any envVars from the above stacks here
		// environmentVariables: {
		// 	USERPOOL_ID: authStack.userpool.userPoolId,
		// 	GRAPHQL_URL: apiStack.graphqlURL,
		// },
	}
)

// #!/usr/bin/env node
// import 'source-map-support/register';
// import * as cdk from 'aws-cdk-lib';
// import { HelloCdkStack } from '../lib/hello-cdk-stack';

// const app = new cdk.App();
// new HelloCdkStack(app, 'HelloCdkStack', {
//   /* If you don't specify 'env', this stack will be environment-agnostic.
//    * Account/Region-dependent features and context lookups will not work,
//    * but a single synthesized template can be deployed anywhere. */

//   /* Uncomment the next line to specialize this stack for the AWS Account
//    * and Region that are implied by the current CLI configuration. */
//   // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

//   /* Uncomment the next line if you know exactly what Account and Region you
//    * want to deploy the stack to. */
//   // env: { account: '123456789012', region: 'us-east-1' },

//   /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
// });