import * as AvatarPrimitive from "@rn-primitives/avatar";
import * as React from "react";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import { userDataStore } from "~/store/userData";

const AvatarPrimitiveRoot = AvatarPrimitive.Root;
const AvatarPrimitiveImage = AvatarPrimitive.Image;
const AvatarPrimitiveFallback = AvatarPrimitive.Fallback;

const Avatar = React.forwardRef<
  AvatarPrimitive.RootRef,
  AvatarPrimitive.RootProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitiveRoot
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitiveRoot.displayName;

const AvatarImage = React.forwardRef<
  AvatarPrimitive.ImageRef,
  AvatarPrimitive.ImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitiveImage
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitiveImage.displayName;

const AvatarFallback = React.forwardRef<
  AvatarPrimitive.FallbackRef,
  AvatarPrimitive.FallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitiveFallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitiveFallback.displayName;

/** Muestra la foto de perfil del usuario (Si existe) */
const FullAvatar = () => {
  const { user } = userDataStore();
  const userLetters = user.name ? user.name.slice(0, 2).toUpperCase() : "UT";
  return (
    <Avatar alt={user.name ? user.name : "UT"}>
      <AvatarImage source={{ uri: user.profilePicture }} />
      <AvatarFallback>
        <Text>{userLetters}</Text>
      </AvatarFallback>
    </Avatar>
  );
};

export { Avatar, AvatarFallback, AvatarImage, FullAvatar };
