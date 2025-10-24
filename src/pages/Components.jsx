import { useState } from "react";
import { Notification } from "../components/Notifications/Notification";
import { ButtonComp } from "../components/ButtonComp";
import { SearchIcon } from "../assets/SearchIcon";
import { CardComp } from "../components/CardComp";
import { ChatInput } from "../components/ChatInput";
import { DropdownComp } from "../components/DropDownComp";
import { InputComp } from "../components/InputComp";
import { InputFeild } from "../components/InputFeild";
import { LogoutConfirmation } from "../components/LogoutConfirmation";
import { useNavigate } from "react-router-dom";
import { MessageCard } from "../components/MessageCard";
import { Middlemodal } from "../components/MiddleModel"
import { OTPModel } from "../components/OTPModel";
import { ProfilePic } from "../components/ProfilePic";
import { Carousel } from "../components/Carousel";
export const Components = () => {
    const [notify, setNotify] = useState(false);
    const [openMiddle, setOpenMiddle] = useState(false);
    const [openOTP, setOpenOTP] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-4 p-8">
            <ButtonComp btntext="Go to Home" onClick={() => navigate("/home")} />
            <InputComp
                endicon={<SearchIcon color="red" />}
            />

            <InputFeild
                type="email"
                placeholder="Email"
                value=""
                onChange={(e) => console.log(e.target.value)}
                name="email"
                label="Email"
            />

            <ChatInput />

            <DropdownComp options={["Option 1", "Option 2", "Option 3"]} />

            <ButtonComp btntext="Notification" onClick={() => setNotify(true)} />
            <Notification isOpen={notify} onClose={() => setNotify(false)} />

            <ButtonComp />
            <ButtonComp endicon={<SearchIcon />} />

            <div className="flex gap-4">
                <CardComp
                    image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="title"
                    likes="100"
                    content="You want a modal component that shows in the center of the page (like your screenshot) and where you can pass custom content (e.g., reset password form). Here’s a reusable Modal component using React + Tailwind:"
                />
                <CardComp
                    image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="title"
                    likes="100"
                    content="You want a modal component that shows in the center of the page (like your screenshot) and where you can pass custom content (e.g., reset password form). Here’s a reusable Modal component using React + Tailwind:"
                />
                <CardComp
                    image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="title"
                    likes="100"
                    content="You want a modal component that shows in the center of the page (like your screenshot) and where you can pass custom content (e.g., reset password form). Here’s a reusable Modal component using React + Tailwind:"
                />
                <CardComp
                    image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="title"
                    likes="100"
                    content="You want a modal component that shows in the center of the page (like your screenshot) and where you can pass custom content (e.g., reset password form). Here’s a reusable Modal component using React + Tailwind:"
                />
            </div>

            <ButtonComp btntext="Logout" onClick={() => navigate("/confirm-logout")} />

            <div className="flex flex-col bg-gray-500">
                <MessageCard
                    isSender
                    userInitial={"JD"}
                    message="Hello, how are you?"
                    time="2: 11 PM"
                />
                <MessageCard
                    userInitial={"JD"}
                    message="Hello, how are you?"
                    time="2: 11 PM"
                />
            </div>
            <ButtonComp btntext="Open middle" onClick={() => setOpenMiddle(true)} />
            <Middlemodal isOpen={openMiddle} onclose={() => setOpenMiddle(false)} >
                <div className="h-[300px] p-6">
                    <button onClick={() => setOpenMiddle(false)} className="absolute top-2 right-2 text-red-500" >X</button>
                    hi every one this is the middle model opener
                </div>
            </Middlemodal>


            <ButtonComp btntext="Open OTP" onClick={() => setOpenOTP(true)} />
            <OTPModel isOpen={openOTP} onClose={() => setOpenOTP(false)} />


            <ProfilePic
                name="John Doe"
                profilePic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                bgColor="#6366F1"
            />
            <ProfilePic
                name="John Doe"
                // profilePic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                bgColor="#6366F1"
            />
            <Carousel
                items={
                    [
                        { image: "https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg", title: "Math Notes", description: "Algebra and calculus notes by seniors" },
                        { image: "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg", title: "Physics Notes", description: "Mechanics and optics study material" },
                        { image: "https://images.pexels.com/photos/204511/pexels-photo-204511.jpeg", title: "Chemistry Notes", description: "Organic and inorganic chemistry" },
                    ]
                }
            />
        </div>
    );
}
