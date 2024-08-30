/* eslint-disable react/jsx-boolean-value */
import { useEffect } from 'react';
import { GovernanceImg } from '../../../assets/images';

/* eslint-disable arrow-body-style */
const Governance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="governance-heading">
        <div className="heading-text">Governance</div>
        <div className="governance-img">
          <img src={GovernanceImg} alt="" />
        </div>
      </div>
      <div className="governance">
        <div className="governance-container">
          <div className="row w-100">
            <div className="col-md-3">
              <div className="navigation-section">
                <div>
                  <a className="nav-link" href="#corporation">
                    The Corporation
                  </a>
                </div>
                <div>
                  <a className="nav-link" href="#structure">
                    Governance Structure
                  </a>
                </div>
                <div>
                  <a className="nav-link" href="#proposal">
                    Proposals and Voting
                  </a>
                </div>
                <div>
                  <a className="nav-link" href="#tranceperancy">
                    Transparency
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="pt-2" id="corporation">
                <div className="head-text">The Corporation</div>
                <div className="normal-text mt-1">
                  The NFTY DeFi Protocol oversees the development and deployment of $NFTY, its
                  associated smart contracts, partnerships with listing services and auction houses,
                  and implementation of community recommendations.
                  <br />
                  <br />
                  The Corporation maintains a board which includes a community board seat. The
                  community board seat votes according to the will of individual NFTY token holders,
                  weighted by their vote power as determined by Social Power.
                </div>
              </div>
              <div id="structure" className="pt-4">
                <div className="head-text"> Governance Structure</div>
                <div className="normal-text mt-1">
                  The governance structure is made up of voting via digital wallets associated with
                  a social rank on the NFTY protocol. Users select a proposal, then choose whether
                  they accept or reject it. The governance smart contract ensures any changes to the
                  protocol are validated by the community.
                  <br />
                  <br />
                  The protocol corporation reserves the emergency right to apply changes on the fly
                  and submit a postmortem vote to the community, which will either validate or
                  revert the changes, in case of security issues, vulnerability, or equivalent
                  emergencies. This gives the community the ability to roll-back changes that are
                  deemed to be unnecessary or a mistaken security issue.
                </div>
              </div>
              <div id="proposal" className="pt-4">
                <div className="head-text"> Proposals and Voting</div>
                <div className="normal-text mt-1">
                  Proposals are put forward on this website for a period of no more than 90 days,
                  and must be viable for the Corporation to implement. Once endorsed by the
                  community, the change will be placed on a testnet for a period of no less than 30
                  days for community testing and validated to production by another community vote.
                  <br />
                  <br />
                  Anyone who puts forth a proposal becomes responsible for developing a pull request
                  branch from the open source repositories. If the change is endorsed, this pull
                  request will be merged in the governance testnet and put to the test. Low quality
                  or obscure code may be rejected by the protocol even if voted in by the community.
                </div>
              </div>
              <div id="tranceperancy" className="pt-4">
                <div className="head-text"> Transparency</div>
                <div className="normal-text mt-1">
                  The smart contracts infrastructure can be verified on Etherscan. It is publicly
                  available for review and inspection by anyone in the community, including industry
                  professionals. All transactions are recorded and the balance of all NFTY holders
                  is available for public viewing.
                  <br />
                  <br />
                  The system is fully trustless. However, for performance reasons, some auction
                  bidding systems which integrate the protocol may include some level of
                  centralization. In such cases, the protocol will work to enable the highest level
                  of reliability, security, and transparency for those systems prior to integration.
                  <br />
                  <br />
                  The NFTY protocol source code and smart contract are fully open source using the
                  MIT license. Not only does this enable the community to create proposals, they can
                  also review the code and search for bugs to earn any associated bounties.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Governance;
