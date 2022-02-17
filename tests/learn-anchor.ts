import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { LearnAnchor } from '../target/types/learn_anchor';

describe('learn-anchor', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.LearnAnchor as Program<LearnAnchor>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
