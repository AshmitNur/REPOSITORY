import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.9-4.72 1.9-3.86 0-7-3.14-7-7s3.14-7 7-7c2.18 0 3.63.86 4.49 1.69l2.6-2.6C18.09 1.72 15.48 0 12.48 0 5.88 0 0 5.88 0 12.48s5.88 12.48 12.48 12.48c7.2 0 12.04-4.82 12.04-12.04 0-.76-.08-1.49-.2-2.22h-11.8v.01Z"
    />
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.613 3.66a1.226 1.226 0 0 0-1.646-1.428L1.613 9.77a1.225 1.225 0 0 0 .143 2.336l5.881 1.833 13.48-8.497c.573-.359.982-.169.516.223"
    />
  </svg>
);


export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and connected services.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Account Linking</CardTitle>
          <CardDescription>
            Connect your accounts to enable powerful automation workflows.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <GoogleIcon className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Google Account</h3>
                <p className="text-sm text-muted-foreground">Connected as user@example.com</p>
              </div>
            </div>
            <Button variant="outline">Disconnect</Button>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <TelegramIcon className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Telegram</h3>
                <p className="text-sm text-muted-foreground">Not connected</p>
              </div>
            </div>
            <Button>Connect</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Local Models</CardTitle>
          <CardDescription>
            Manage the LLMs running on your device.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold">M1: Text Model (Llama 3.1 8B)</h3>
              <p className="text-sm text-muted-foreground">Status: <span className="text-green-600">Active</span></p>
            </div>
            <Button variant="outline">Check for Updates</Button>
          </div>
           <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold">M2: Multimodal Model (LLaVA 1.6)</h3>
              <p className="text-sm text-muted-foreground">Status: <span className="text-green-600">Active</span></p>
            </div>
            <Button variant="outline">Check for Updates</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
