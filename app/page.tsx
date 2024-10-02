import SignInFacebook from "@/components/connexionFacebook";
import SignInGithub from "@/components/connexionGithub";
import SignInGoogle from "@/components/connexionGoogle";

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <SignInGoogle />
      <SignInGithub />
      <SignInFacebook />
    </>
  );
}
