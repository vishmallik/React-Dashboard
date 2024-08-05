import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { useToast } from "./ui/use-toast";

export default function LogoutAlert() {
  const { toast } = useToast();

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
        <AlertDialogDescription hidden>
          This will logout users from the current session. Are you sure you want
          to continue?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={() => {
            toast({
              title: "Logged out!",
              description: "You have been successfully logged out.",
              duration: 2000,
            });
          }}
        >
          Logout
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
