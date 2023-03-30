factorial :: Int -> Int
factorial x =
    if x <= 1 then
        1
    else
        x * factorial (x - 1)

main :: IO()
main = do
    print "Digite um numero inteiro na caixa Stdin Inputs"
    input <- getLine
    let inputInt = (read input :: Int)
    print(factorial inputInt)