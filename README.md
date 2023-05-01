# Demo of ADC not working with Firebase Auth

## Problem

can't use application-default with firebase auth in local development environment

have been using a service account that is stored in secret manager and all my devs use it. Its a massive security problem and I want to get away from it.

it is so much more convenient to just run `gcloud auth application-default login` and then having iam roles manage the permissions but I can't right now.

## To Reproduce

run the code with 

```
> gcloud auth application-default login

> npm install

> npm run dev
```

will get an error 

```
FirebaseAuthError: //cloud.google.com/docs/authentication/. If you are getting this error with curl or similar tools, you may need to specify 'X-Goog-User-Project' HTTP header for quota and billing purposes. For more information regarding 'X-Goog-User-Project' header, please check https://cloud.google.com/apis/docs/system-parameters. Raw server response: "{"error":{"code":403,"message":"Your application has authenticated using end user credentials from the Google Cloud SDK or Google Cloud Shell which are not supported by the identitytoolkit.googleapis.com. We recommend configuring the billing/quota_project setting in gcloud or using a service account through the auth/impersonate_service_account setting. For more information about service accounts and how to use them in your application, see https://cloud.google.com/docs/authentication/. If you are getting this error with curl or similar tools, you may need to specify 'X-Goog-User-Project' HTTP header for quota and billing purposes. For more information regarding 'X-Goog-User-Project' header, please check https://cloud.google.com/apis/docs/system-parameters.","errors":[{"message":"Your application has authenticated using end user credentials from the Google Cloud SDK or Google Cloud Shell which are not supported by the identitytoolkit.googleapis.com. We recommend configuring the billing/quota_project setting in gcloud or using a service account through the auth/impersonate_service_account setting. For more information about service accounts and how to use them in your application, see https://cloud.google.com/docs/authentication/. If you are getting this error with curl or similar tools, you may need to specify 'X-Goog-User-Project' HTTP header for quota and billing purposes. For more information regarding 'X-Goog-User-Project' header, please check https://cloud.google.com/apis/docs/system-parameters.","domain":"usageLimits","reason":"accessNotConfigured","extendedHelp":"https://console.developers.google.com"}],"status":"PERMISSION_DENIED","details":[{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"SERVICE_DISABLED","domain":"googleapis.com","metadata":{"service":"identitytoolkit.googleapis.com","consumer":"projects/764086051850"}}]}}"
```

## Also tried

Tried using auth with impersonation but that did not work
> `gcloud auth application-default login --impersonate-service-account=<SRVICE_ACCOUNT_NAME_THAT_HAS_PEMSSIONS>`

## Would like to

- be able to have a developer set up access to GCP services through a simple command
- be able to manage the developer's access through their iam roles
