import { Button, Box } from '@mui/material';

export default function Index() {
  return (
    <Box padding={5}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs Hahs
          </a>
        </li>
      </ul>
      <Button color="primary" variant="contained">
        Button
      </Button>
    </Box>
  );
}
