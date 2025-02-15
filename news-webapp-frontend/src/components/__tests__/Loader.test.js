import { render, screen } from "@testing-library/react";
import Loader from "../Loader";

describe("Tests for Loader",()=>{
    it('Loader is present',async ()=>{
        render(<Loader />);
        const loaderElement = screen.getByTestId("loader");
        expect(loaderElement).toBeInTheDocument();
    })
})
