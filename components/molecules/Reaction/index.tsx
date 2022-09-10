
interface ReachedProps {
    rate: string;
    desc: string;
}
export default function Reaction(props: ReachedProps) {
    const {rate, desc} = props;
  return (
              <div className="me-lg-35">
            <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{rate}</p>
            <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
          </div>
  )
}
