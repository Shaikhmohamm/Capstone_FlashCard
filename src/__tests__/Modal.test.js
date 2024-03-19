// Importing necessary testing utilities and components
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../components/Modal";
import React from "react";
import toast from "react-hot-toast";


jest.mock("react-hot-toast");

// Test suite for the Modal component
describe("Test Model Component", () => {
    // Test case: Rendering the Modal component
    it("should render model component", () => {
        // Using a wrapper component to provide the state
        const WrapperComponent = () => {
            const [showModal, setShowModal] = React.useState(false);
            return <Modal setShowModal={setShowModal} showModal={showModal} />;
        };

        render(<WrapperComponent />);
        const model = screen.getByTestId("test-modal");
        expect(model).toBeInTheDocument();
    });

    // Test case: Clicking on the close button
    it("should click on close button", () => {
        const setShowModalMock = jest.fn();
        render(<Modal setShowModal={setShowModalMock} />);
        fireEvent.click(screen.getByTestId("test-close-button"));
        expect(setShowModalMock).toHaveBeenCalledWith(false);
    });

    // Test case: Showing URL link on screen
    it("should show url link on screen", () => {
        render(<Modal />);
        delete window.location;
        window.location = { href: "https://www.google.com" };
        expect(window.location.href).toBe("https://www.google.com");
    });

    // Test case: Copying link on click
    it("should copy link on click", () => {
        render(<Modal />);
        expect(window.location.href).toBe("https://www.google.com");
        expect(screen.getByTestId("test-copy-button")).toBeInTheDocument();
        navigator.clipboard = { writeText: jest.fn() };

        fireEvent.click(screen.getByTestId("test-copy-button"));
        expect(toast.success).toHaveBeenCalledWith("Link copied to clipboard");
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
            window.location.href
        );
    });

    // Test case: Toggling social share icons
    it("should toggle social share icons", () => {
        render(<Modal />);
        expect(screen.getByTestId("test-social-share")).toHaveClass(
            "-z-50 -translate-y-[100%]"
        );

        fireEvent.click(screen.getByTestId("toggle-social-share"));

        expect(screen.getByTestId("test-social-share")).toHaveClass(
            " -translate-y-[0] z-40"
        );
    });

    // Test case: Sharing at WhatsApp on click
    it("should share at whatsapp on click", () => {
        render(<Modal />);
        window.open = jest.fn();
        const whatsapp = screen.getByTestId("test-whatsapp");
        expect(whatsapp).toBeInTheDocument();

        fireEvent.click(whatsapp);

        expect(window.open).toHaveBeenCalledWith(
            "https://web.whatsapp.com/",
            "_blank"
        );
    });
});
