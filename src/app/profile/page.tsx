import Container from "@/components/Container";
import FormWrap from "@/components/Form/FormWrapper";
import ProfileForm from "@/components/Form/ProfileForm";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { getUserInfo } from "@/service/authService";

const ProfilePage = () => {
  const userInfo = getUserInfo();
  return (
    <div className="">
      <Navbar />
      <Container>
        <FormWrap>
          <ProfileForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default ProfilePage;
