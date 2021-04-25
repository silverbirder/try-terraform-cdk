# try-terraform-cdk

## before

```
$ brew tap hashicorp/tap
$ brew install hashicorp/tap/terraform
```


## init

```
$ npm install
$ npm run get
```

note) Please prepare the gcp credential file. (→google.json)

## deploy&destroy

```
$ GCP_REGION=X GCP_ZONE=Y GCP_PROJECT=Z npm run synth
$ npm run diff
$ GCP_REGION=X GCP_ZONE=Y GCP_PROJECT=Z npm run deploy
> cdktf deploy
Deploying Stack: typescript-gcp
Resources
 ✔ GOOGLE_COMPUTE_INSTA typescriptgcp_Compu google_compute_instance.typescriptgcp_C
   NCE                  teInstance          omputeInstance_FF08E23F
 ✔ GOOGLE_COMPUTE_NETWO typescriptgcp_Netwo google_compute_network.typescriptgcp_Ne
   RK                   rk                  twork_49126F52

Summary: 2 created, 0 updated, 0 destroyed.

$ GCP_REGION=X GCP_ZONE=Y GCP_PROJECT=Z npm run destroy
> cdktf destroy

Destroying Stack: typescript-gcp
Resources
 ✔ GOOGLE_COMPUTE_INSTA typescriptgcp_Compu google_compute_instance.typescriptgcp_C
   NCE                  teInstance          omputeInstance_FF08E23F
 ✔ GOOGLE_COMPUTE_NETWO typescriptgcp_Netwo google_compute_network.typescriptgcp_Ne
   RK                   rk                  twork_49126F52
```