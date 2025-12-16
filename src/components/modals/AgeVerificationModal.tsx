import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck } from "lucide-react";

const AGE_VERIFIED_KEY = "helix-age-verified";

export const AgeVerificationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem(AGE_VERIFIED_KEY);
    if (!isVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    if (acceptedTerms) {
      localStorage.setItem(AGE_VERIFIED_KEY, "true");
      setIsOpen(false);
    }
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md bg-background border-border"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center items-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Age Verification Required
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center mt-2">
            You must be 21 years of age or older to enter this website. Please confirm your age and accept our terms to continue.
          </DialogDescription>
          <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground text-left leading-relaxed">
              All compounds and research materials provided by Helix Research are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
            </p>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              className="mt-1"
            />
            <label
              htmlFor="terms"
              className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
            >
              I confirm that I am 21 years of age or older and I agree to the{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={handleConfirm}
              disabled={!acceptedTerms}
              className="w-full"
              size="lg"
            >
              I Am 21 or Older - Enter Site
            </Button>
            <Button
              variant="outline"
              onClick={handleDecline}
              className="w-full"
              size="lg"
            >
              I Am Under 21 - Exit
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            By entering this site, you agree to comply with all applicable laws regarding the purchase and use of our products.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
