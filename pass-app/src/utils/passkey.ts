import {TurnkeyClient} from '@turnkey/http';
import {
  createPasskey,
  PasskeyStamper,
  TurnkeyAuthenticatorParams,
} from '@turnkey/react-native-passkey-stamper';
import {TSignRawPayloadBody} from 'node_modules/@turnkey/http/dist/__generated__/services/coordinator/public/v1/public_api.fetcher';
import {ENVIRONMENTS} from '../constants/environments.constants';

function initializeTurnkeyClient() {
  const stamper = new PasskeyStamper({
    rpId: ENVIRONMENTS.relayerPartyId,
  });

  const turnkeyClient = new TurnkeyClient(
    {baseUrl: 'https://api.turnkey.com'},
    stamper,
  );

  return turnkeyClient;
}

export async function createPassKey({
  userId,
  name,
  displayName,
}: {
  userId: string;
  name: string;
  displayName: string;
}): Promise<TurnkeyAuthenticatorParams | undefined> {
  const config = {
    rp: {
      id: ENVIRONMENTS.relayerPartyId,
      name: 'Pass Test App',
    },
    user: {
      id: userId,
      name: name,
      displayName: displayName,
    },
    authenticatorName: 'End-User Passkey',
  };

  return createPasskey(config);
}

export async function requestPassKeyAuthorization(args: {
  payload: string;
  walletAddress: string;
  subOrgId: string;
}) {
  const turnkeyClient = initializeTurnkeyClient();
  const {subOrgId, walletAddress, payload} = args;

  const rawPayloadBodyToSign = {
    type: 'ACTIVITY_TYPE_SIGN_RAW_PAYLOAD_V2',
    timestampMs: String(Date.now()),
    organizationId: subOrgId,
    parameters: {
      signWith: walletAddress,
      payload,
      encoding: 'PAYLOAD_ENCODING_HEXADECIMAL',
      hashFunction: 'HASH_FUNCTION_NO_OP',
    },
  } as TSignRawPayloadBody;

  return turnkeyClient.signRawPayload(rawPayloadBodyToSign);
}
