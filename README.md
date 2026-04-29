# AfriReal Protocol 🌍

> **African Real World Asset Marketplace on Pharos Network**
> *Bringing $1 Trillion in African Real-World Assets onto the Blockchain — One Token at a Time*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built on Pharos](https://img.shields.io/badge/Built%20on-Pharos%20Network-00E5CC)](https://pharos.xyz)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue)](https://soliditylang.org)
[![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-5.0-purple)](https://openzeppelin.com)

---

## 🌐 The Problem

Africa holds over **$1 trillion in untapped real-world assets** — agricultural land, commercial real estate, SME invoices, trade finance, and commodities — yet the vast majority of this wealth sits illiquid, inaccessible to both local and global capital.

At the same time, millions of African investors lack access to yield-bearing financial instruments that reflect the actual productivity of their continent.

**The gap is infrastructure. AfriReal is the bridge.**

---

## 💡 What is AfriReal Protocol?

AfriReal Protocol is a **decentralised Real World Asset (RWA) marketplace** built natively on **Pharos Network** — the fastest EVM-compatible Layer 1 blockchain, capable of 50,000 transactions per second with sub-second finality.

AfriReal enables:

- **Asset Originators** (farmers, developers, SMEs) to tokenize their real-world assets into fractional ERC-20 tokens
- **Investors** (local and global) to purchase fractional ownership in verified African assets and earn on-chain yield
- **Regulators & Verifiers** to manage KYC/AML compliance fully on-chain through a permissioned role system
- **Institutions** to access African emerging-market yield instruments with institutional-grade compliance

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     AfriReal Protocol                        │
│                   (Pharos Network L1)                        │
├────────────────────┬────────────────────┬────────────────────┤
│   AssetRegistry    │     RWAToken       │  AfriRealMarket-   │
│                    │                    │      place         │
│  • Asset onboard   │  • ERC-20 fractions│  • Fixed price     │
│  • KYC/Legal check │  • Yield distrib.  │  • Order matching  │
│  • TVL tracking    │  • KYC whitelist   │  • Fee collection  │
│  • Country/class   │  • Compliance lock │  • Escrow          │
│    indexing        │  • Redemption      │  • Volume tracking │
└────────────────────┴────────────────────┴────────────────────┘
           │                  │                    │
           └──────────────────┴────────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   IPFS / Chainlink │
                    │  Oracles / Off-    │
                    │  chain Compliance  │
                    └───────────────────┘
```

---

## 📦 Smart Contracts

### `IRWAAsset.sol`
Core interface defining the RWA asset standard for AfriReal. All asset tokens implement this interface, enabling composability with the broader Pharos DeFi ecosystem.

**Asset Classes:**
| Class | Description | Examples |
|---|---|---|
| `AGRICULTURAL` | Farm produce & land | Maize, cocoa, palm oil farms |
| `REAL_ESTATE` | Commercial & residential | Lagos commercial plots |
| `SME_INVOICE` | Trade finance factoring | SME receivables |
| `COMMODITY` | Physical commodities | Gold, crude oil |
| `INFRASTRUCTURE` | Project finance | Energy, logistics |
| `CARBON_CREDIT` | Environmental assets | Afforestation credits |

---

### `AssetRegistry.sol`
Central registry and compliance hub for all RWA tokens on AfriReal.

**Key Features:**
- Role-based access control (Originator, Verifier, Compliance, Admin)
- Dual-gate verification: KYC + Legal approval both required before trading
- Automatic status promotion on clearance
- Country-code and asset-class indexing for discovery
- Full TVL tracking by country and sector

**Roles:**
| Role | Capability |
|---|---|
| `ORIGINATOR_ROLE` | Register new assets |
| `VERIFIER_ROLE` | Approve KYC for originators |
| `COMPLIANCE_ROLE` | Approve legal docs, freeze assets |
| `DEFAULT_ADMIN` | Grant/revoke roles, pause protocol |

---

### `RWAToken.sol`
Fractional ownership token for a single verified real-world asset.

**Key Features:**
- ERC-20 compliant with transfer restrictions (KYC-gated)
- On-chain yield distribution in native Pharos tokens
- Per-token yield accounting (no gas-heavy loops)
- Compliance blacklisting
- Asset redemption at maturity (triggers off-chain fulfillment)
- OpenZeppelin Pausable, AccessControl, ReentrancyGuard

---

### `AfriRealMarketplace.sol`
Primary trading venue for fractional RWA tokens.

**Key Features:**
- Fixed-price listings with escrow
- Supports native Pharos token and ERC-20 stablecoin payments
- Configurable protocol fee (max 2%, default 0.5%)
- Only verified assets from the registry can be listed
- Full trade history and volume tracking on-chain
- Pausable for emergency compliance response

---

## 🗺️ Target Markets

| Country | Priority Assets | Market Opportunity |
|---|---|---|
| 🇳🇬 Nigeria | Agricultural, Real Estate, SME Invoice | $240B |
| 🇰🇪 Kenya | Agricultural, Infrastructure | $85B |
| 🇬🇭 Ghana | Gold, Agricultural, Carbon Credits | $60B |
| 🇿🇦 South Africa | Real Estate, Infrastructure | $180B |
| 🇪🇹 Ethiopia | Agricultural, Carbon Credits | $45B |

---

## ⚡ Why Pharos Network?

AfriReal is purpose-built on Pharos for three critical reasons:

1. **Speed** — 50,000 TPS with sub-second finality means real-time settlement of asset trades, yield distributions, and compliance actions — critical for African markets operating across multiple time zones
2. **Compliance Architecture** — Pharos's native ZK-KYC/AML modules align with AfriReal's compliance-first approach to RWA tokenization
3. **Institutional Bridge** — Pharos's focus on connecting TradFi with DeFi mirrors AfriReal's mission to bring African institutional capital on-chain
4. **Cost** — Near-zero transaction fees make micro-investments ($10–$100 range) economically viable for African retail investors

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn
- A Pharos testnet wallet with PHAR tokens ([Faucet](https://testnet.pharosscan.xyz))

### Installation

```bash
git clone https://github.com/marquise3310/afrireal-protocol.git
cd afrireal-protocol
npm install
cp .env.example .env
# Fill in your DEPLOYER_PRIVATE_KEY in .env
```

### Compile Contracts

```bash
npm run compile
```

### Run Tests

```bash
npm test
```

### Deploy to Pharos Testnet

```bash
npm run deploy:testnet
```

### Deploy to Pharos Mainnet

```bash
npm run deploy:mainnet
```

---

## 🛣️ Roadmap

### Phase 1 — Foundation *(Current)*
- [x] Core smart contract architecture
- [x] AssetRegistry with KYC/Legal dual-gate
- [x] RWAToken with yield distribution
- [x] AfriRealMarketplace with fixed-price trading
- [x] Pharos Network deployment configuration
- [ ] Testnet deployment & audit

### Phase 2 — Growth
- [ ] Auction-based listing type
- [ ] Multi-currency support (cNGN, USDC, USDT)
- [ ] Chainlink price oracle integration
- [ ] IPFS metadata standard & SDK
- [ ] Mobile-first investor interface
- [ ] Nigeria SEC regulatory sandbox application

### Phase 3 — Scale
- [ ] Cross-chain bridge (Pharos ↔ Ethereum ↔ BNB)
- [ ] DAO governance for protocol parameters
- [ ] Carbon credit vertical launch
- [ ] Pan-African institutional partnerships
- [ ] $10M TVL milestone

---

## 🔐 Security

- All contracts use OpenZeppelin's battle-tested base implementations
- ReentrancyGuard on all state-changing external functions
- Role-based access control with principle of least privilege
- Pausable emergency stop mechanism
- Transfer restrictions enforced at the ERC-20 `_update` hook level
- Formal audit planned prior to mainnet launch

---

## 🤝 Contributing

AfriReal Protocol is open to contributors, especially developers with experience in:
- Solidity / EVM development
- African regulatory frameworks
- DeFi protocol design
- Frontend Web3 development (React + ethers.js/wagmi)

Please open an issue or reach out directly before submitting a PR.

---

## 📫 Contact & Links

| Platform | Handle |
|---|---|
| Twitter / X | [@R3almarquis3](https://twitter.com/R3almarquis3) |
| LinkedIn | [linkedin.com/in/Moses-Mark](https://linkedin.com/in/Moses-Mark) |
| Email | Deliege091@gmail.com |
| Telegram | marquise33 |
| Discord | @marquise077 |

---

## 📄 License

MIT License — see [LICENSE](./LICENSE) for details.

---

> *"The next wave of DeFi won't come from Silicon Valley. It'll come from Lagos, Nairobi, Accra, and Addis Ababa."*
> — AfriReal Protocol

**Built by Marquise | Powered by Pharos Network 🌍⚡**
