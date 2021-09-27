import React from 'react';
import { Link } from 'react-router-dom';

export default function Category() {

  return (

    <section class="features section" id='categories'>
                <div class="container">
					<div class="features-inner section-inner has-bottom-divider">
						<h2 class="section-title mt-0">Category</h2>
                        <div class="features-wrap">
												<Link to={'/categories/Art'}>
                            <div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="feature-1-a">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-1-b">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M24 48H0V24C0 10.745 10.745 0 24 0h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-1-a)"/>
										        <path d="M40 64H16V40c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-1-b)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Artwork</h3>
                                    <p class="text-sm mb-0">Collect or sell artwork.</p>
                                </div>
                            </div>
														</Link>
														<Link to={'/categories/SportsCards'}>
							<div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="68" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="feature-2-a">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-2-b">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M9.941 63.941v-24c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24h-24z" fill="url(#feature-2-a)" transform="rotate(45 33.941 39.941)"/>
										        <path d="M16 0v24c0 13.255 10.745 24 24 24h24V24C64 10.745 53.255 0 40 0H16z" fill="url(#feature-2-b)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Sports Card</h3>
                                    <p class="text-sm mb-0">Collect or sell sports cards.</p>
                                </div>
                            </div>
														</Link>
														<Link to={'/categories/Photography'}>
                            <div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="43.901%" id="feature-3-a">
										            <stop stop-color="#F97059" stop-opacity=".798" offset="0%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="58.893%" y1="100%" x2="58.893%" y2="18.531%" id="feature-3-b">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-3-c">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path fill="url(#feature-3-a)" opacity=".32" d="M0 24h64v40H0z"/>
										        <path fill="url(#feature-3-b)" d="M40 24H24L0 64h64z"/>
										        <path d="M10 10v22c0 12.15 9.85 22 22 22h22V32c0-12.15-9.85-22-22-22H10z" fill="url(#feature-3-c)" transform="rotate(45 32 32)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Photography</h3>
                                    <p class="text-sm mb-0">Collect or sell photography.</p>
                                </div>
                            </div>
														</Link>
														<Link to={'/categories/Albums'}>
                            <div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
										    <defs>
										        <linearGradient x1="0%" y1="100%" x2="50%" y2="0%" id="feature-4-a">
										            <stop stop-color="#F9425F" stop-opacity=".8" offset="0%"/>
										            <stop stop-color="#47A1F9" stop-opacity=".16" offset="100%"/>
										        </linearGradient>
										        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="feature-4-b">
										            <stop stop-color="#FDFFDA" offset="0%"/>
										            <stop stop-color="#F97059" stop-opacity=".798" offset="49.935%"/>
										            <stop stop-color="#F9425F" stop-opacity="0" offset="100%"/>
										        </linearGradient>
										    </defs>
										    <g fill="none" fill-rule="evenodd">
										        <path d="M24 64H0V40c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-4-a)" transform="matrix(-1 0 0 1 48 0)"/>
										        <path d="M40 48H16V24C16 10.745 26.745 0 40 0h24v24c0 13.255-10.745 24-24 24" fill="url(#feature-4-b)"/>
										    </g>
										</svg>
                                    </div>
                                    <h3 class="feature-title mt-24">Album Covers</h3>
                                    <p class="text-sm mb-0">Collect or sell album covers.</p>
                                </div>
                            </div>
														</Link>
                        </div>
                    </div>
                </div>
            </section>
  )
}