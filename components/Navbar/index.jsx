import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Header = styled.header`
  background-color: #232323;
  @media only screen and (max-width: 600px) {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
  }
`

const Navigation = styled.nav`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: #bb3535;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      a {
        display: block;
        font-weight: bold;
        color: #dedede;
        text-decoration:none;
        padding: 10px 20px;
        > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          i {
            margin-bottom: 5px;
          }
        }
      }
      &.active {
        a {
          color: #bb3535;
        }
      }
      &:hover {
        a {
          color: #bb3535;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    > div {
      display: none;
    }
    ul li a {
      padding: 6px 30px;
      font-weight: 500;
    }
    ul li a > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        font-size: 1.2em;
        margin-bottom: 3px;
      }
    }
  }
`

const Navbar = () => {
  const router = useRouter()
  const { pathname }  = router
    return (
			<Header>
				<Navigation>
          <div>
            <h1>Covid19Info</h1>
          </div>
					<ul>	
						<li className={pathname === '/' ? 'active' : ''}>
							<Link href="/">
								<a>
                  <div>
                    <i className="ri-home-smile-fill" />
                    Home
                  </div>
                </a>
							</Link>
						</li>
						<li  className={pathname === '/covid-news' ? 'active' : ''}>
							<Link href="/covid-news">
								<a>
                  <div>
                    <i className="ri-newspaper-fill" />
                    Covid News
                  </div>
                </a>
							</Link>
						</li>
						<li  className={pathname === '/about' ? 'active' : ''}>
							<Link href="/about">
								<a>
                  <div>
                    <i className="ri-admin-fill" />
                    About
                  </div>
                </a>
							</Link>
						</li>
					</ul>
				</Navigation>
			</Header>
    )
}

export default Navbar