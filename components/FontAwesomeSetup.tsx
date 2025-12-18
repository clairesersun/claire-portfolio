"use client"

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Solid icons
import {
  faSun,
  faMoon,
  faWheelchairMove,
  faLeaf,
  faTrowelBricks,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
// Regular icons
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// Brands
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// Prevent FontAwesome from auto-injecting CSS — we already have styles defined
config.autoAddCss = false

// Add the icons we actually use to the library (keeps bundle smaller)
library.add(
  faSun,
  faMoon,
  faWheelchairMove,
  faLeaf,
  faTrowelBricks,
  faArrowUpRightFromSquare,
  faEnvelope,
  faLinkedin,
  faGithub
)

export default function FontAwesomeSetup() {
  // This component's module side-effects initialize the library; nothing to render.
  return null
}
