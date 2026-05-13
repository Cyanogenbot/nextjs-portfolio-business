{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "nextjs-portfolio-business";

  buildInputs = with pkgs; [
    nodejs_latest
    corepack
  ];

  packages = with pkgs; [
    # Development tools
    nodePackages.eslint
    nodePackages.prettier

    # TypeScript
    typescript
    nodePackages.typescript-language-server
  ];
}
