import {add} from './App'

test('Test add function', () => {

    const result = add(1, 2)
    // console.log("🚀 ~ test ~ result", result)

    expect(result).toBe(3)
    
    const result2 = add(1, 1000)
    expect(result2).toBe(1001)

    
})

test('Test add function 2', () => {

    const result = add(1, 2)
    // console.log("🚀 ~ test ~ result", result)

    expect(result).toBe(3)
    
    const result2 = add(1, 1000)
    expect(result2).toBe(1001)

    
})