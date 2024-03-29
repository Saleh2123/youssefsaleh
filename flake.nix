{
  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/x86_64-linux";

    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
  };
  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;

      perSystem = { self', pkgs, system, ... }: {
        _module.args.pkgs =
          import "${inputs.nixpkgs}/pkgs/top-level" { localSystem = system; };

        formatter = pkgs.nixfmt;

        devShells.default =
          pkgs.mkShell.override { stdenv = pkgs.stdenvNoCC; } {
            name = "@topp/mono";

            packages = [
              pkgs.biome
              pkgs.bun
              pkgs.corepack_latest
              pkgs.hurl
              pkgs.nil
              pkgs.nodejs_latest
              pkgs.nodejs_latest.pkgs."@prisma/language-server"
              pkgs.nodejs_latest.pkgs."@tailwindcss/language-server"
              pkgs.openssl
              pkgs.prisma-engines
              pkgs.shellcheck
              pkgs.shfmt
              pkgs.vscode-langservers-extracted
              self'.formatter
            ];

            shellHook = ''
              set -o allexport

              PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine"
              PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
              PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine"

              set +o allexport
            '';
          };
      };
    };
}
