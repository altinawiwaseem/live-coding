import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

test('<Counter />', () => {

    render(<Counter />)

    const minusButton = screen.getByTestId('minusbutton')
    // console.log("🚀 ~ test ~ plusButton", plusButton)


    expect(minusButton.textContent).toContain('-')

    const plusButton = screen.getByTestId('plusbutton')


    expect(plusButton.textContent).toContain('+')

})

test('<Counter /> state testing', () => {

    render(<Counter />)

    const counter = screen.getByTestId('counter')

    expect(counter.textContent).toContain('0')

    const plusButton = screen.getByTestId('plusbutton')

    fireEvent.click(plusButton)
    fireEvent.click(plusButton)

    expect(counter.textContent).toContain('2')

    const minusButton = screen.getByTestId('minusbutton')

    fireEvent.click(minusButton)

    expect(counter.textContent).toContain('1')
})