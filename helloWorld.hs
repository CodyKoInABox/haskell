hello :: [Char]
hello = "Hello, World!"

helloWorld :: IO()
helloWorld = print hello

main :: IO()
main = do
    helloWorld