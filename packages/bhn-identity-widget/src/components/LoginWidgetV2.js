import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { GoogleLogin } from "react-google-login";
import { FacebookProvider, LoginButton } from "react-facebook";
import "./LoginWidget.css";
import "./LoginWidgetV2.scss";
import "bootstrap/dist/css/bootstrap.css";


export default class LoginWidgetV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      url: ""
    };
  }

  responseGoogle = response => {
    console.log(response);
    this.setState({
      name: response.profileObj.name,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl
    });
  };
  responseFacebook = response => {
    console.log(response);
  };
  responseErrorFacebook = error => {
    console.log(error);
  };

  render() {
    return (
      <div className="devk__container">
        <div class="login-pf-page">
          <div id="kc-header" class="login-pf-page-header">
            <div id="kc-header-wrapper"
              class="">BHN Single Sign-On</div>
          </div>
          <div class="card-pf login-pf-accounts">
            <header class="login-pf-header">
              <h1 id="kc-page-title"> Sign in to your account

              </h1>
            </header>
            <div id="kc-content">
              <div id="kc-content-wrapper">



                <div id="alert-security" class="alert-warning pf-c-alert pf-m-inline pf-m-warning" style={{display: 'none'}}>
                  <div class="pf-c-alert__icon">
                    <span class="fa fa-fw fa-exclamation-triangle"></span>
                  </div>
                  <span class="pf-c-alert__title kc-feedback-text" id="security-motd"></span>
                </div>

                <div id="kc-form">
                  <div id="kc-form-wrapper">
                    <div class="login-form-caption-large">Sign in with your BHN account</div>
                    <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="https://auth.cern.ch/auth/realms/cern/login-actions/authenticate?session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74&amp;execution=cf009777-d4b7-40de-b2be-de5de077e998&amp;client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg" method="post">
                      <div class="form-group">
                        <label for="username" class="pf-c-form__label pf-c-form__label-text">Username</label>
                        <input tabindex="1" id="username" class="pf-c-form-control" name="username" placeholder="login name" type="text" autofocus autocomplete="off"
                          aria-invalid=""
                        />
                        <span id="username-email-help" class="pf-c-form__helper-text pf-m-error required kc-feedback-text" aria-live="polite" style={{display: 'none'}}>
                          Enter a BHN username. To use an external email address, choose an option under &quot;Sign in with your email or organisation&quot;.
                        </span>
                      </div>

                      <div class="form-group">
                        <label for="password" class="pf-c-form__label pf-c-form__label-text">Password</label>

                        <input tabindex="2" id="password" class="pf-c-form-control" name="password" type="password" autocomplete="off"
                          aria-invalid=""
                        />
                      </div>

                      <div class="form-group login-pf-settings">
                        <div id="kc-form-options">
                        </div>
                        <div class="">
                          <span><a tabindex="5" href="https://users-portal.web.cern.ch/self-service-reset" id="resetPassUrl">Forgot Password?</a></span>
                        </div>

                      </div>

                      <div id="kc-form-buttons" class="form-group">
                        <input type="hidden" id="id-hidden-input" name="credentialId" />
                        <input tabindex="4" class="pf-c-button pf-m-primary pf-m-block btn-lg" name="login" id="kc-login" type="submit" value="Sign In" />
                      </div>
                    </form>

                    <div id="cern-providers" class="sub-providers">
                      <hr/>
                        <div class="login-form-caption-small">Or use another login method</div>
                        <ul class="pf-c-login__main-footer-links kc-social-links ">
                          <a id="social-mfa" class="pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray pf-l-grid__item"
                            type="button" href="/auth/realms/cern/broker/mfa/login?client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg&amp;session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74">

                            <i class="kc-social-provider-logo kc-social-gray fa fa-key" aria-hidden="true"></i>
                            <span class="kc-social-provider-name kc-social-icon-text">Two-factor authentication</span>
                          </a>
                          <a id="social-kerberos" class="pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray pf-l-grid__item"
                            type="button" href="/auth/realms/cern/broker/kerberos/login?client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg&amp;session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74">

                            <i class="kc-social-provider-logo kc-social-gray fa fa-sign-in" aria-hidden="true"></i>
                            <span class="kc-social-provider-name kc-social-icon-text">Kerberos</span>
                          </a>
                        </ul>
                    </div>
                    <div class="reminder-oc5">Reminder: you have agreed to comply with the <a href="https://security.web.cern.ch/security/rules/en/index.shtml">BHN Terms and Conditions</a>.</div>
                  </div>

                  <div id="kc-social-providers" class=" ">
                    <div class="login-form-caption-large">Sign in with your email or partner login</div>
                    <div id="user-providers" class="sub-providers">
                      <ul class="pf-c-login__main-footer-links kc-social-links ">
                        <a id="social-eduGAIN" class="pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray pf-l-grid__item"
                          type="button" href="/auth/realms/cern/broker/eduGAIN/login?client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg&amp;session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74">

                          <i class="kc-social-provider-logo kc-social-gray fa fa-university" aria-hidden="true"></i>
                          <span class="kc-social-provider-name kc-social-icon-text">Partner Login</span>
                        </a>
                        <a id="social-guest" class="pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray pf-l-grid__item"
                          type="button" href="/auth/realms/cern/broker/guest/login?client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg&amp;session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74">

                          <i class="kc-social-provider-logo kc-social-gray fa fa-envelope" aria-hidden="true"></i>
                          <span class="kc-social-provider-name kc-social-icon-text">External email - Guest access</span>
                        </a>
                      </ul>
                    </div>

                    <div id="social-providers" class="sub-providers">
                      <hr/>
                        <div class="login-form-caption-small">Or sign in with a social account</div>
                        <div class="social-privacy-notice">By clicking on the buttons below, you consent to BHN's transfer of your login request to the social provider and to receive your account name, name and e-mail for authenticating you. Click <a href="https://auth.docs.cern.ch/privacy-notice/#social-login-providers-privacy-notice" target="_blank">here</a> for more details.</div>
                        <ul class="pf-c-login__main-footer-links kc-social-links ">
                          <a id="social-google" class="pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray pf-l-grid__item"
                            type="button" href="/auth/realms/cern/broker/google/login?client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg&amp;session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74">

                            <i class="kc-social-provider-logo kc-social-gray fa fa-google" aria-hidden="true"></i>
                            <span class="kc-social-provider-name kc-social-icon-text">Google</span>
                          </a>
                          <a id="social-linkedin" class="pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray pf-l-grid__item"
                            type="button" href="/auth/realms/cern/broker/linkedin/login?client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg&amp;session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74">

                            <i class="kc-social-provider-logo kc-social-gray fa fa-linkedin" aria-hidden="true"></i>
                            <span class="kc-social-provider-name kc-social-icon-text">LinkedIn</span>
                          </a>
                          <a id="social-github" class="pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray pf-l-grid__item"
                            type="button" href="/auth/realms/cern/broker/github/login?client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg&amp;session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74">

                            <i class="kc-social-provider-logo kc-social-gray fa fa-github" aria-hidden="true"></i>
                            <span class="kc-social-provider-name kc-social-icon-text">GitHub</span>
                          </a>
                          <a id="social-facebook" class="pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray pf-l-grid__item"
                            type="button" href="/auth/realms/cern/broker/facebook/login?client_id=gitlab-prod&amp;tab_id=4NQkmEnO-tg&amp;session_code=vxQnw7ZVjRqUSOqs3iRppjhcT1cmrLLoQalOepZ2X74">

                            <i class="kc-social-provider-logo kc-social-gray fa fa-facebook" aria-hidden="true"></i>
                            <span class="kc-social-provider-name kc-social-icon-text">Facebook</span>
                          </a>
                        </ul>
                    </div>
                  </div>
                </div>



              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
