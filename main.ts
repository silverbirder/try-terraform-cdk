import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { GoogleProvider, ComputeNetwork, ComputeInstance } from './.gen/providers/google'
import * as path from 'path'
import * as fs from 'fs'

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const credentialsPath = path.join(process.cwd(), 'google.json')
    const credentials = fs.existsSync(credentialsPath) ? fs.readFileSync(credentialsPath).toString() : '{}'

    new GoogleProvider(this, 'Google', {
      region: process.env.GCP_REGION,
      zone: process.env.GCP_ZONE,
      project: process.env.GCP_PROJECT,
      credentials
    })

    const network = new ComputeNetwork(this, 'Network', {
      name: 'cdktf-network'
    })

    new ComputeInstance(this, 'ComputeInstance', {
      name: 'cdktf-instance',
      machineType: 'f1-micro',
      bootDisk: [{
        initializeParams: [{
          image: 'debian-cloud/debian-9'
        }]
      }],
      networkInterface: [{
        network: network.name
      }],
      tags: ["web", "dev"],
      dependsOn: [network]
    })
  }
}

const app = new App();
new MyStack(app, 'typescript-gcp');
app.synth();