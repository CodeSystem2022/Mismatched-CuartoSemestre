// eslint-disable-next-line react/prop-types
export function Container({children, className}) {
  return (
    <div className={"max-w-9xl px-6 " + className}>{children}</div>
  )
}

export default Container