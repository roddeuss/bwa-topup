import Reaction from "../../molecules/Reaction";

export default function Reached() {
  return (
     <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">

        <Reaction rate="290M+" desc="Players Top Up"/>
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
        <Reaction rate="12.500" desc="Games Available"/>
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
        <Reaction rate="99,9%" desc="Happy Players"/>
        <div className="horizontal-line mt-5 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
        <Reaction rate="4.7" desc="Rating World Wide"/>
        </div>
      </div>
    </section>
  )
}
