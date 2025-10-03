// components/about-us/about-us-server.tsx
import AboutUsPage from "./about-us-page"
import MobileAboutUsPage from "./mobile-about-us-page"
import MobileWrapper from "./mobile-wrapper"

export default async function AboutUsServer() {
  // ⬇️ You can still put async fetch logic here if needed.
  return (
    <MobileWrapper
      desktop={<AboutUsPage />}
      mobile={<MobileAboutUsPage />}
    />
  )
}
